'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4502<T> = T extends (infer U)[]
  ? DeepReadonlyArray4502<U>
  : T extends object
  ? DeepReadonlyObject4502<T>
  : T;

interface DeepReadonlyArray4502<T> extends ReadonlyArray<DeepReadonly4502<T>> {}

type DeepReadonlyObject4502<T> = {
  readonly [P in keyof T]: DeepReadonly4502<T[P]>;
};

type UnionToIntersection4502<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4502<T> = UnionToIntersection4502<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4502<T extends unknown[], V> = [...T, V];

type TuplifyUnion4502<T, L = LastOf4502<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4502<TuplifyUnion4502<Exclude<T, L>>, L>;

type DeepPartial4502<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4502<T[P]> }
  : T;

type Paths4502<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4502<K, Paths4502<T[K], Prev4502[D]>> : never }[keyof T]
  : never;

type Prev4502 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4502<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4502 {
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

type ConfigPaths4502 = Paths4502<NestedConfig4502>;

interface HeavyProps4502 {
  config: DeepPartial4502<NestedConfig4502>;
  path?: ConfigPaths4502;
}

const HeavyComponent4502 = memo(function HeavyComponent4502({ config }: HeavyProps4502) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4502) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4502 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4502: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4502.displayName = 'HeavyComponent4502';
export default HeavyComponent4502;
