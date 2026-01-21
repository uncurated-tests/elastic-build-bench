'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14551<T> = T extends (infer U)[]
  ? DeepReadonlyArray14551<U>
  : T extends object
  ? DeepReadonlyObject14551<T>
  : T;

interface DeepReadonlyArray14551<T> extends ReadonlyArray<DeepReadonly14551<T>> {}

type DeepReadonlyObject14551<T> = {
  readonly [P in keyof T]: DeepReadonly14551<T[P]>;
};

type UnionToIntersection14551<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14551<T> = UnionToIntersection14551<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14551<T extends unknown[], V> = [...T, V];

type TuplifyUnion14551<T, L = LastOf14551<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14551<TuplifyUnion14551<Exclude<T, L>>, L>;

type DeepPartial14551<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14551<T[P]> }
  : T;

type Paths14551<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14551<K, Paths14551<T[K], Prev14551[D]>> : never }[keyof T]
  : never;

type Prev14551 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14551<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14551 {
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

type ConfigPaths14551 = Paths14551<NestedConfig14551>;

interface HeavyProps14551 {
  config: DeepPartial14551<NestedConfig14551>;
  path?: ConfigPaths14551;
}

const HeavyComponent14551 = memo(function HeavyComponent14551({ config }: HeavyProps14551) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14551) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14551 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14551: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14551.displayName = 'HeavyComponent14551';
export default HeavyComponent14551;
