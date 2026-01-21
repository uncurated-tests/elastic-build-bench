'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11033<T> = T extends (infer U)[]
  ? DeepReadonlyArray11033<U>
  : T extends object
  ? DeepReadonlyObject11033<T>
  : T;

interface DeepReadonlyArray11033<T> extends ReadonlyArray<DeepReadonly11033<T>> {}

type DeepReadonlyObject11033<T> = {
  readonly [P in keyof T]: DeepReadonly11033<T[P]>;
};

type UnionToIntersection11033<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11033<T> = UnionToIntersection11033<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11033<T extends unknown[], V> = [...T, V];

type TuplifyUnion11033<T, L = LastOf11033<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11033<TuplifyUnion11033<Exclude<T, L>>, L>;

type DeepPartial11033<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11033<T[P]> }
  : T;

type Paths11033<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11033<K, Paths11033<T[K], Prev11033[D]>> : never }[keyof T]
  : never;

type Prev11033 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11033<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11033 {
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

type ConfigPaths11033 = Paths11033<NestedConfig11033>;

interface HeavyProps11033 {
  config: DeepPartial11033<NestedConfig11033>;
  path?: ConfigPaths11033;
}

const HeavyComponent11033 = memo(function HeavyComponent11033({ config }: HeavyProps11033) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11033) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11033 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11033: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11033.displayName = 'HeavyComponent11033';
export default HeavyComponent11033;
