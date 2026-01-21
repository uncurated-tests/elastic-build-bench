'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2971<T> = T extends (infer U)[]
  ? DeepReadonlyArray2971<U>
  : T extends object
  ? DeepReadonlyObject2971<T>
  : T;

interface DeepReadonlyArray2971<T> extends ReadonlyArray<DeepReadonly2971<T>> {}

type DeepReadonlyObject2971<T> = {
  readonly [P in keyof T]: DeepReadonly2971<T[P]>;
};

type UnionToIntersection2971<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2971<T> = UnionToIntersection2971<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2971<T extends unknown[], V> = [...T, V];

type TuplifyUnion2971<T, L = LastOf2971<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2971<TuplifyUnion2971<Exclude<T, L>>, L>;

type DeepPartial2971<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2971<T[P]> }
  : T;

type Paths2971<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2971<K, Paths2971<T[K], Prev2971[D]>> : never }[keyof T]
  : never;

type Prev2971 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2971<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2971 {
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

type ConfigPaths2971 = Paths2971<NestedConfig2971>;

interface HeavyProps2971 {
  config: DeepPartial2971<NestedConfig2971>;
  path?: ConfigPaths2971;
}

const HeavyComponent2971 = memo(function HeavyComponent2971({ config }: HeavyProps2971) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2971) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2971 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2971: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2971.displayName = 'HeavyComponent2971';
export default HeavyComponent2971;
