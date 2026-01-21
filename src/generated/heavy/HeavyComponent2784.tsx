'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2784<T> = T extends (infer U)[]
  ? DeepReadonlyArray2784<U>
  : T extends object
  ? DeepReadonlyObject2784<T>
  : T;

interface DeepReadonlyArray2784<T> extends ReadonlyArray<DeepReadonly2784<T>> {}

type DeepReadonlyObject2784<T> = {
  readonly [P in keyof T]: DeepReadonly2784<T[P]>;
};

type UnionToIntersection2784<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2784<T> = UnionToIntersection2784<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2784<T extends unknown[], V> = [...T, V];

type TuplifyUnion2784<T, L = LastOf2784<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2784<TuplifyUnion2784<Exclude<T, L>>, L>;

type DeepPartial2784<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2784<T[P]> }
  : T;

type Paths2784<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2784<K, Paths2784<T[K], Prev2784[D]>> : never }[keyof T]
  : never;

type Prev2784 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2784<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2784 {
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

type ConfigPaths2784 = Paths2784<NestedConfig2784>;

interface HeavyProps2784 {
  config: DeepPartial2784<NestedConfig2784>;
  path?: ConfigPaths2784;
}

const HeavyComponent2784 = memo(function HeavyComponent2784({ config }: HeavyProps2784) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2784) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2784 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2784: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2784.displayName = 'HeavyComponent2784';
export default HeavyComponent2784;
