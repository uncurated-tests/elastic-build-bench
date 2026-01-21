'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11894<T> = T extends (infer U)[]
  ? DeepReadonlyArray11894<U>
  : T extends object
  ? DeepReadonlyObject11894<T>
  : T;

interface DeepReadonlyArray11894<T> extends ReadonlyArray<DeepReadonly11894<T>> {}

type DeepReadonlyObject11894<T> = {
  readonly [P in keyof T]: DeepReadonly11894<T[P]>;
};

type UnionToIntersection11894<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11894<T> = UnionToIntersection11894<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11894<T extends unknown[], V> = [...T, V];

type TuplifyUnion11894<T, L = LastOf11894<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11894<TuplifyUnion11894<Exclude<T, L>>, L>;

type DeepPartial11894<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11894<T[P]> }
  : T;

type Paths11894<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11894<K, Paths11894<T[K], Prev11894[D]>> : never }[keyof T]
  : never;

type Prev11894 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11894<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11894 {
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

type ConfigPaths11894 = Paths11894<NestedConfig11894>;

interface HeavyProps11894 {
  config: DeepPartial11894<NestedConfig11894>;
  path?: ConfigPaths11894;
}

const HeavyComponent11894 = memo(function HeavyComponent11894({ config }: HeavyProps11894) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11894) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11894 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11894: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11894.displayName = 'HeavyComponent11894';
export default HeavyComponent11894;
