'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11003<T> = T extends (infer U)[]
  ? DeepReadonlyArray11003<U>
  : T extends object
  ? DeepReadonlyObject11003<T>
  : T;

interface DeepReadonlyArray11003<T> extends ReadonlyArray<DeepReadonly11003<T>> {}

type DeepReadonlyObject11003<T> = {
  readonly [P in keyof T]: DeepReadonly11003<T[P]>;
};

type UnionToIntersection11003<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11003<T> = UnionToIntersection11003<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11003<T extends unknown[], V> = [...T, V];

type TuplifyUnion11003<T, L = LastOf11003<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11003<TuplifyUnion11003<Exclude<T, L>>, L>;

type DeepPartial11003<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11003<T[P]> }
  : T;

type Paths11003<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11003<K, Paths11003<T[K], Prev11003[D]>> : never }[keyof T]
  : never;

type Prev11003 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11003<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11003 {
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

type ConfigPaths11003 = Paths11003<NestedConfig11003>;

interface HeavyProps11003 {
  config: DeepPartial11003<NestedConfig11003>;
  path?: ConfigPaths11003;
}

const HeavyComponent11003 = memo(function HeavyComponent11003({ config }: HeavyProps11003) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11003) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11003 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11003: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11003.displayName = 'HeavyComponent11003';
export default HeavyComponent11003;
