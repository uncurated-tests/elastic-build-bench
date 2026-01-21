'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2351<T> = T extends (infer U)[]
  ? DeepReadonlyArray2351<U>
  : T extends object
  ? DeepReadonlyObject2351<T>
  : T;

interface DeepReadonlyArray2351<T> extends ReadonlyArray<DeepReadonly2351<T>> {}

type DeepReadonlyObject2351<T> = {
  readonly [P in keyof T]: DeepReadonly2351<T[P]>;
};

type UnionToIntersection2351<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2351<T> = UnionToIntersection2351<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2351<T extends unknown[], V> = [...T, V];

type TuplifyUnion2351<T, L = LastOf2351<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2351<TuplifyUnion2351<Exclude<T, L>>, L>;

type DeepPartial2351<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2351<T[P]> }
  : T;

type Paths2351<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2351<K, Paths2351<T[K], Prev2351[D]>> : never }[keyof T]
  : never;

type Prev2351 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2351<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2351 {
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

type ConfigPaths2351 = Paths2351<NestedConfig2351>;

interface HeavyProps2351 {
  config: DeepPartial2351<NestedConfig2351>;
  path?: ConfigPaths2351;
}

const HeavyComponent2351 = memo(function HeavyComponent2351({ config }: HeavyProps2351) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2351) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2351 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2351: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2351.displayName = 'HeavyComponent2351';
export default HeavyComponent2351;
