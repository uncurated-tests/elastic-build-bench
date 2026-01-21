'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8267<T> = T extends (infer U)[]
  ? DeepReadonlyArray8267<U>
  : T extends object
  ? DeepReadonlyObject8267<T>
  : T;

interface DeepReadonlyArray8267<T> extends ReadonlyArray<DeepReadonly8267<T>> {}

type DeepReadonlyObject8267<T> = {
  readonly [P in keyof T]: DeepReadonly8267<T[P]>;
};

type UnionToIntersection8267<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8267<T> = UnionToIntersection8267<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8267<T extends unknown[], V> = [...T, V];

type TuplifyUnion8267<T, L = LastOf8267<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8267<TuplifyUnion8267<Exclude<T, L>>, L>;

type DeepPartial8267<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8267<T[P]> }
  : T;

type Paths8267<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8267<K, Paths8267<T[K], Prev8267[D]>> : never }[keyof T]
  : never;

type Prev8267 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8267<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8267 {
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

type ConfigPaths8267 = Paths8267<NestedConfig8267>;

interface HeavyProps8267 {
  config: DeepPartial8267<NestedConfig8267>;
  path?: ConfigPaths8267;
}

const HeavyComponent8267 = memo(function HeavyComponent8267({ config }: HeavyProps8267) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8267) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8267 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8267: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8267.displayName = 'HeavyComponent8267';
export default HeavyComponent8267;
