'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14399<T> = T extends (infer U)[]
  ? DeepReadonlyArray14399<U>
  : T extends object
  ? DeepReadonlyObject14399<T>
  : T;

interface DeepReadonlyArray14399<T> extends ReadonlyArray<DeepReadonly14399<T>> {}

type DeepReadonlyObject14399<T> = {
  readonly [P in keyof T]: DeepReadonly14399<T[P]>;
};

type UnionToIntersection14399<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14399<T> = UnionToIntersection14399<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14399<T extends unknown[], V> = [...T, V];

type TuplifyUnion14399<T, L = LastOf14399<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14399<TuplifyUnion14399<Exclude<T, L>>, L>;

type DeepPartial14399<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14399<T[P]> }
  : T;

type Paths14399<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14399<K, Paths14399<T[K], Prev14399[D]>> : never }[keyof T]
  : never;

type Prev14399 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14399<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14399 {
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

type ConfigPaths14399 = Paths14399<NestedConfig14399>;

interface HeavyProps14399 {
  config: DeepPartial14399<NestedConfig14399>;
  path?: ConfigPaths14399;
}

const HeavyComponent14399 = memo(function HeavyComponent14399({ config }: HeavyProps14399) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14399) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14399 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14399: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14399.displayName = 'HeavyComponent14399';
export default HeavyComponent14399;
