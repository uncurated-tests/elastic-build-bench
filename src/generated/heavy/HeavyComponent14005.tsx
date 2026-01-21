'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14005<T> = T extends (infer U)[]
  ? DeepReadonlyArray14005<U>
  : T extends object
  ? DeepReadonlyObject14005<T>
  : T;

interface DeepReadonlyArray14005<T> extends ReadonlyArray<DeepReadonly14005<T>> {}

type DeepReadonlyObject14005<T> = {
  readonly [P in keyof T]: DeepReadonly14005<T[P]>;
};

type UnionToIntersection14005<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14005<T> = UnionToIntersection14005<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14005<T extends unknown[], V> = [...T, V];

type TuplifyUnion14005<T, L = LastOf14005<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14005<TuplifyUnion14005<Exclude<T, L>>, L>;

type DeepPartial14005<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14005<T[P]> }
  : T;

type Paths14005<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14005<K, Paths14005<T[K], Prev14005[D]>> : never }[keyof T]
  : never;

type Prev14005 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14005<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14005 {
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

type ConfigPaths14005 = Paths14005<NestedConfig14005>;

interface HeavyProps14005 {
  config: DeepPartial14005<NestedConfig14005>;
  path?: ConfigPaths14005;
}

const HeavyComponent14005 = memo(function HeavyComponent14005({ config }: HeavyProps14005) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14005) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14005 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14005: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14005.displayName = 'HeavyComponent14005';
export default HeavyComponent14005;
