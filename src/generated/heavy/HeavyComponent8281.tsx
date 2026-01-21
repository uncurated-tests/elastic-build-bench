'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8281<T> = T extends (infer U)[]
  ? DeepReadonlyArray8281<U>
  : T extends object
  ? DeepReadonlyObject8281<T>
  : T;

interface DeepReadonlyArray8281<T> extends ReadonlyArray<DeepReadonly8281<T>> {}

type DeepReadonlyObject8281<T> = {
  readonly [P in keyof T]: DeepReadonly8281<T[P]>;
};

type UnionToIntersection8281<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8281<T> = UnionToIntersection8281<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8281<T extends unknown[], V> = [...T, V];

type TuplifyUnion8281<T, L = LastOf8281<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8281<TuplifyUnion8281<Exclude<T, L>>, L>;

type DeepPartial8281<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8281<T[P]> }
  : T;

type Paths8281<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8281<K, Paths8281<T[K], Prev8281[D]>> : never }[keyof T]
  : never;

type Prev8281 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8281<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8281 {
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

type ConfigPaths8281 = Paths8281<NestedConfig8281>;

interface HeavyProps8281 {
  config: DeepPartial8281<NestedConfig8281>;
  path?: ConfigPaths8281;
}

const HeavyComponent8281 = memo(function HeavyComponent8281({ config }: HeavyProps8281) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8281) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8281 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8281: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8281.displayName = 'HeavyComponent8281';
export default HeavyComponent8281;
