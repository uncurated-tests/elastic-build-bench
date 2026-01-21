'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11791<T> = T extends (infer U)[]
  ? DeepReadonlyArray11791<U>
  : T extends object
  ? DeepReadonlyObject11791<T>
  : T;

interface DeepReadonlyArray11791<T> extends ReadonlyArray<DeepReadonly11791<T>> {}

type DeepReadonlyObject11791<T> = {
  readonly [P in keyof T]: DeepReadonly11791<T[P]>;
};

type UnionToIntersection11791<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11791<T> = UnionToIntersection11791<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11791<T extends unknown[], V> = [...T, V];

type TuplifyUnion11791<T, L = LastOf11791<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11791<TuplifyUnion11791<Exclude<T, L>>, L>;

type DeepPartial11791<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11791<T[P]> }
  : T;

type Paths11791<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11791<K, Paths11791<T[K], Prev11791[D]>> : never }[keyof T]
  : never;

type Prev11791 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11791<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11791 {
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

type ConfigPaths11791 = Paths11791<NestedConfig11791>;

interface HeavyProps11791 {
  config: DeepPartial11791<NestedConfig11791>;
  path?: ConfigPaths11791;
}

const HeavyComponent11791 = memo(function HeavyComponent11791({ config }: HeavyProps11791) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11791) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11791 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11791: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11791.displayName = 'HeavyComponent11791';
export default HeavyComponent11791;
