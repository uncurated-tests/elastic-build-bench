'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11046<T> = T extends (infer U)[]
  ? DeepReadonlyArray11046<U>
  : T extends object
  ? DeepReadonlyObject11046<T>
  : T;

interface DeepReadonlyArray11046<T> extends ReadonlyArray<DeepReadonly11046<T>> {}

type DeepReadonlyObject11046<T> = {
  readonly [P in keyof T]: DeepReadonly11046<T[P]>;
};

type UnionToIntersection11046<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11046<T> = UnionToIntersection11046<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11046<T extends unknown[], V> = [...T, V];

type TuplifyUnion11046<T, L = LastOf11046<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11046<TuplifyUnion11046<Exclude<T, L>>, L>;

type DeepPartial11046<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11046<T[P]> }
  : T;

type Paths11046<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11046<K, Paths11046<T[K], Prev11046[D]>> : never }[keyof T]
  : never;

type Prev11046 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11046<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11046 {
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

type ConfigPaths11046 = Paths11046<NestedConfig11046>;

interface HeavyProps11046 {
  config: DeepPartial11046<NestedConfig11046>;
  path?: ConfigPaths11046;
}

const HeavyComponent11046 = memo(function HeavyComponent11046({ config }: HeavyProps11046) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11046) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11046 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11046: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11046.displayName = 'HeavyComponent11046';
export default HeavyComponent11046;
