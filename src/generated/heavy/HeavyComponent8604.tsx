'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8604<T> = T extends (infer U)[]
  ? DeepReadonlyArray8604<U>
  : T extends object
  ? DeepReadonlyObject8604<T>
  : T;

interface DeepReadonlyArray8604<T> extends ReadonlyArray<DeepReadonly8604<T>> {}

type DeepReadonlyObject8604<T> = {
  readonly [P in keyof T]: DeepReadonly8604<T[P]>;
};

type UnionToIntersection8604<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8604<T> = UnionToIntersection8604<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8604<T extends unknown[], V> = [...T, V];

type TuplifyUnion8604<T, L = LastOf8604<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8604<TuplifyUnion8604<Exclude<T, L>>, L>;

type DeepPartial8604<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8604<T[P]> }
  : T;

type Paths8604<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8604<K, Paths8604<T[K], Prev8604[D]>> : never }[keyof T]
  : never;

type Prev8604 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8604<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8604 {
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

type ConfigPaths8604 = Paths8604<NestedConfig8604>;

interface HeavyProps8604 {
  config: DeepPartial8604<NestedConfig8604>;
  path?: ConfigPaths8604;
}

const HeavyComponent8604 = memo(function HeavyComponent8604({ config }: HeavyProps8604) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8604) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8604 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8604: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8604.displayName = 'HeavyComponent8604';
export default HeavyComponent8604;
