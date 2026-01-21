'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11739<T> = T extends (infer U)[]
  ? DeepReadonlyArray11739<U>
  : T extends object
  ? DeepReadonlyObject11739<T>
  : T;

interface DeepReadonlyArray11739<T> extends ReadonlyArray<DeepReadonly11739<T>> {}

type DeepReadonlyObject11739<T> = {
  readonly [P in keyof T]: DeepReadonly11739<T[P]>;
};

type UnionToIntersection11739<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11739<T> = UnionToIntersection11739<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11739<T extends unknown[], V> = [...T, V];

type TuplifyUnion11739<T, L = LastOf11739<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11739<TuplifyUnion11739<Exclude<T, L>>, L>;

type DeepPartial11739<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11739<T[P]> }
  : T;

type Paths11739<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11739<K, Paths11739<T[K], Prev11739[D]>> : never }[keyof T]
  : never;

type Prev11739 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11739<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11739 {
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

type ConfigPaths11739 = Paths11739<NestedConfig11739>;

interface HeavyProps11739 {
  config: DeepPartial11739<NestedConfig11739>;
  path?: ConfigPaths11739;
}

const HeavyComponent11739 = memo(function HeavyComponent11739({ config }: HeavyProps11739) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11739) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11739 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11739: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11739.displayName = 'HeavyComponent11739';
export default HeavyComponent11739;
