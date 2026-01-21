'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9502<T> = T extends (infer U)[]
  ? DeepReadonlyArray9502<U>
  : T extends object
  ? DeepReadonlyObject9502<T>
  : T;

interface DeepReadonlyArray9502<T> extends ReadonlyArray<DeepReadonly9502<T>> {}

type DeepReadonlyObject9502<T> = {
  readonly [P in keyof T]: DeepReadonly9502<T[P]>;
};

type UnionToIntersection9502<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9502<T> = UnionToIntersection9502<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9502<T extends unknown[], V> = [...T, V];

type TuplifyUnion9502<T, L = LastOf9502<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9502<TuplifyUnion9502<Exclude<T, L>>, L>;

type DeepPartial9502<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9502<T[P]> }
  : T;

type Paths9502<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9502<K, Paths9502<T[K], Prev9502[D]>> : never }[keyof T]
  : never;

type Prev9502 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9502<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9502 {
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

type ConfigPaths9502 = Paths9502<NestedConfig9502>;

interface HeavyProps9502 {
  config: DeepPartial9502<NestedConfig9502>;
  path?: ConfigPaths9502;
}

const HeavyComponent9502 = memo(function HeavyComponent9502({ config }: HeavyProps9502) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9502) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9502 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9502: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9502.displayName = 'HeavyComponent9502';
export default HeavyComponent9502;
