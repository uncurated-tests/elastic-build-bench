'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11702<T> = T extends (infer U)[]
  ? DeepReadonlyArray11702<U>
  : T extends object
  ? DeepReadonlyObject11702<T>
  : T;

interface DeepReadonlyArray11702<T> extends ReadonlyArray<DeepReadonly11702<T>> {}

type DeepReadonlyObject11702<T> = {
  readonly [P in keyof T]: DeepReadonly11702<T[P]>;
};

type UnionToIntersection11702<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11702<T> = UnionToIntersection11702<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11702<T extends unknown[], V> = [...T, V];

type TuplifyUnion11702<T, L = LastOf11702<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11702<TuplifyUnion11702<Exclude<T, L>>, L>;

type DeepPartial11702<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11702<T[P]> }
  : T;

type Paths11702<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11702<K, Paths11702<T[K], Prev11702[D]>> : never }[keyof T]
  : never;

type Prev11702 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11702<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11702 {
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

type ConfigPaths11702 = Paths11702<NestedConfig11702>;

interface HeavyProps11702 {
  config: DeepPartial11702<NestedConfig11702>;
  path?: ConfigPaths11702;
}

const HeavyComponent11702 = memo(function HeavyComponent11702({ config }: HeavyProps11702) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11702) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11702 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11702: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11702.displayName = 'HeavyComponent11702';
export default HeavyComponent11702;
