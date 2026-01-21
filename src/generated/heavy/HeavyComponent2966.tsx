'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2966<T> = T extends (infer U)[]
  ? DeepReadonlyArray2966<U>
  : T extends object
  ? DeepReadonlyObject2966<T>
  : T;

interface DeepReadonlyArray2966<T> extends ReadonlyArray<DeepReadonly2966<T>> {}

type DeepReadonlyObject2966<T> = {
  readonly [P in keyof T]: DeepReadonly2966<T[P]>;
};

type UnionToIntersection2966<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2966<T> = UnionToIntersection2966<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2966<T extends unknown[], V> = [...T, V];

type TuplifyUnion2966<T, L = LastOf2966<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2966<TuplifyUnion2966<Exclude<T, L>>, L>;

type DeepPartial2966<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2966<T[P]> }
  : T;

type Paths2966<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2966<K, Paths2966<T[K], Prev2966[D]>> : never }[keyof T]
  : never;

type Prev2966 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2966<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2966 {
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

type ConfigPaths2966 = Paths2966<NestedConfig2966>;

interface HeavyProps2966 {
  config: DeepPartial2966<NestedConfig2966>;
  path?: ConfigPaths2966;
}

const HeavyComponent2966 = memo(function HeavyComponent2966({ config }: HeavyProps2966) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2966) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2966 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2966: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2966.displayName = 'HeavyComponent2966';
export default HeavyComponent2966;
