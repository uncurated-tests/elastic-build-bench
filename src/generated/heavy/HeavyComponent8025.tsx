'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8025<T> = T extends (infer U)[]
  ? DeepReadonlyArray8025<U>
  : T extends object
  ? DeepReadonlyObject8025<T>
  : T;

interface DeepReadonlyArray8025<T> extends ReadonlyArray<DeepReadonly8025<T>> {}

type DeepReadonlyObject8025<T> = {
  readonly [P in keyof T]: DeepReadonly8025<T[P]>;
};

type UnionToIntersection8025<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8025<T> = UnionToIntersection8025<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8025<T extends unknown[], V> = [...T, V];

type TuplifyUnion8025<T, L = LastOf8025<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8025<TuplifyUnion8025<Exclude<T, L>>, L>;

type DeepPartial8025<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8025<T[P]> }
  : T;

type Paths8025<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8025<K, Paths8025<T[K], Prev8025[D]>> : never }[keyof T]
  : never;

type Prev8025 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8025<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8025 {
  level1: {
    level2: {
      level3: {
        value: string;
        count: number;
        enabled: boolean;
        items: Array<{ id: number; name: string }>;
      };
    };
  };
}

type ConfigPaths8025 = Paths8025<NestedConfig8025>;

interface HeavyProps8025 {
  config: DeepPartial8025<NestedConfig8025>;
  path?: ConfigPaths8025;
}

const HeavyComponent8025 = memo(function HeavyComponent8025({ config }: HeavyProps8025) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8025) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8025 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8025: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8025.displayName = 'HeavyComponent8025';
export default HeavyComponent8025;
