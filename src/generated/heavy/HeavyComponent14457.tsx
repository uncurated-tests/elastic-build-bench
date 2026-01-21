'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14457<T> = T extends (infer U)[]
  ? DeepReadonlyArray14457<U>
  : T extends object
  ? DeepReadonlyObject14457<T>
  : T;

interface DeepReadonlyArray14457<T> extends ReadonlyArray<DeepReadonly14457<T>> {}

type DeepReadonlyObject14457<T> = {
  readonly [P in keyof T]: DeepReadonly14457<T[P]>;
};

type UnionToIntersection14457<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14457<T> = UnionToIntersection14457<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14457<T extends unknown[], V> = [...T, V];

type TuplifyUnion14457<T, L = LastOf14457<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14457<TuplifyUnion14457<Exclude<T, L>>, L>;

type DeepPartial14457<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14457<T[P]> }
  : T;

type Paths14457<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14457<K, Paths14457<T[K], Prev14457[D]>> : never }[keyof T]
  : never;

type Prev14457 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14457<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14457 {
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

type ConfigPaths14457 = Paths14457<NestedConfig14457>;

interface HeavyProps14457 {
  config: DeepPartial14457<NestedConfig14457>;
  path?: ConfigPaths14457;
}

const HeavyComponent14457 = memo(function HeavyComponent14457({ config }: HeavyProps14457) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14457) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14457 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14457: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14457.displayName = 'HeavyComponent14457';
export default HeavyComponent14457;
