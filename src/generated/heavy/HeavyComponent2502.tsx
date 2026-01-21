'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2502<T> = T extends (infer U)[]
  ? DeepReadonlyArray2502<U>
  : T extends object
  ? DeepReadonlyObject2502<T>
  : T;

interface DeepReadonlyArray2502<T> extends ReadonlyArray<DeepReadonly2502<T>> {}

type DeepReadonlyObject2502<T> = {
  readonly [P in keyof T]: DeepReadonly2502<T[P]>;
};

type UnionToIntersection2502<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2502<T> = UnionToIntersection2502<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2502<T extends unknown[], V> = [...T, V];

type TuplifyUnion2502<T, L = LastOf2502<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2502<TuplifyUnion2502<Exclude<T, L>>, L>;

type DeepPartial2502<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2502<T[P]> }
  : T;

type Paths2502<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2502<K, Paths2502<T[K], Prev2502[D]>> : never }[keyof T]
  : never;

type Prev2502 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2502<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2502 {
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

type ConfigPaths2502 = Paths2502<NestedConfig2502>;

interface HeavyProps2502 {
  config: DeepPartial2502<NestedConfig2502>;
  path?: ConfigPaths2502;
}

const HeavyComponent2502 = memo(function HeavyComponent2502({ config }: HeavyProps2502) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2502) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2502 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2502: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2502.displayName = 'HeavyComponent2502';
export default HeavyComponent2502;
