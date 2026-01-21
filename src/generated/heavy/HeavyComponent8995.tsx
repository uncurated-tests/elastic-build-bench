'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8995<T> = T extends (infer U)[]
  ? DeepReadonlyArray8995<U>
  : T extends object
  ? DeepReadonlyObject8995<T>
  : T;

interface DeepReadonlyArray8995<T> extends ReadonlyArray<DeepReadonly8995<T>> {}

type DeepReadonlyObject8995<T> = {
  readonly [P in keyof T]: DeepReadonly8995<T[P]>;
};

type UnionToIntersection8995<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8995<T> = UnionToIntersection8995<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8995<T extends unknown[], V> = [...T, V];

type TuplifyUnion8995<T, L = LastOf8995<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8995<TuplifyUnion8995<Exclude<T, L>>, L>;

type DeepPartial8995<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8995<T[P]> }
  : T;

type Paths8995<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8995<K, Paths8995<T[K], Prev8995[D]>> : never }[keyof T]
  : never;

type Prev8995 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8995<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8995 {
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

type ConfigPaths8995 = Paths8995<NestedConfig8995>;

interface HeavyProps8995 {
  config: DeepPartial8995<NestedConfig8995>;
  path?: ConfigPaths8995;
}

const HeavyComponent8995 = memo(function HeavyComponent8995({ config }: HeavyProps8995) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8995) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8995 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8995: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8995.displayName = 'HeavyComponent8995';
export default HeavyComponent8995;
