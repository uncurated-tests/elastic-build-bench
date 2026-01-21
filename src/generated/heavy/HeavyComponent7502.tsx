'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7502<T> = T extends (infer U)[]
  ? DeepReadonlyArray7502<U>
  : T extends object
  ? DeepReadonlyObject7502<T>
  : T;

interface DeepReadonlyArray7502<T> extends ReadonlyArray<DeepReadonly7502<T>> {}

type DeepReadonlyObject7502<T> = {
  readonly [P in keyof T]: DeepReadonly7502<T[P]>;
};

type UnionToIntersection7502<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7502<T> = UnionToIntersection7502<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7502<T extends unknown[], V> = [...T, V];

type TuplifyUnion7502<T, L = LastOf7502<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7502<TuplifyUnion7502<Exclude<T, L>>, L>;

type DeepPartial7502<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7502<T[P]> }
  : T;

type Paths7502<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7502<K, Paths7502<T[K], Prev7502[D]>> : never }[keyof T]
  : never;

type Prev7502 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7502<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7502 {
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

type ConfigPaths7502 = Paths7502<NestedConfig7502>;

interface HeavyProps7502 {
  config: DeepPartial7502<NestedConfig7502>;
  path?: ConfigPaths7502;
}

const HeavyComponent7502 = memo(function HeavyComponent7502({ config }: HeavyProps7502) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7502) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7502 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7502: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7502.displayName = 'HeavyComponent7502';
export default HeavyComponent7502;
