'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11551<T> = T extends (infer U)[]
  ? DeepReadonlyArray11551<U>
  : T extends object
  ? DeepReadonlyObject11551<T>
  : T;

interface DeepReadonlyArray11551<T> extends ReadonlyArray<DeepReadonly11551<T>> {}

type DeepReadonlyObject11551<T> = {
  readonly [P in keyof T]: DeepReadonly11551<T[P]>;
};

type UnionToIntersection11551<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11551<T> = UnionToIntersection11551<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11551<T extends unknown[], V> = [...T, V];

type TuplifyUnion11551<T, L = LastOf11551<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11551<TuplifyUnion11551<Exclude<T, L>>, L>;

type DeepPartial11551<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11551<T[P]> }
  : T;

type Paths11551<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11551<K, Paths11551<T[K], Prev11551[D]>> : never }[keyof T]
  : never;

type Prev11551 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11551<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11551 {
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

type ConfigPaths11551 = Paths11551<NestedConfig11551>;

interface HeavyProps11551 {
  config: DeepPartial11551<NestedConfig11551>;
  path?: ConfigPaths11551;
}

const HeavyComponent11551 = memo(function HeavyComponent11551({ config }: HeavyProps11551) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11551) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11551 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11551: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11551.displayName = 'HeavyComponent11551';
export default HeavyComponent11551;
