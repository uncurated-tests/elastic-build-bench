'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2857<T> = T extends (infer U)[]
  ? DeepReadonlyArray2857<U>
  : T extends object
  ? DeepReadonlyObject2857<T>
  : T;

interface DeepReadonlyArray2857<T> extends ReadonlyArray<DeepReadonly2857<T>> {}

type DeepReadonlyObject2857<T> = {
  readonly [P in keyof T]: DeepReadonly2857<T[P]>;
};

type UnionToIntersection2857<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2857<T> = UnionToIntersection2857<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2857<T extends unknown[], V> = [...T, V];

type TuplifyUnion2857<T, L = LastOf2857<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2857<TuplifyUnion2857<Exclude<T, L>>, L>;

type DeepPartial2857<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2857<T[P]> }
  : T;

type Paths2857<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2857<K, Paths2857<T[K], Prev2857[D]>> : never }[keyof T]
  : never;

type Prev2857 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2857<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2857 {
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

type ConfigPaths2857 = Paths2857<NestedConfig2857>;

interface HeavyProps2857 {
  config: DeepPartial2857<NestedConfig2857>;
  path?: ConfigPaths2857;
}

const HeavyComponent2857 = memo(function HeavyComponent2857({ config }: HeavyProps2857) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2857) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2857 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2857: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2857.displayName = 'HeavyComponent2857';
export default HeavyComponent2857;
