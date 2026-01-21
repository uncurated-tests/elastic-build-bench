'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11297<T> = T extends (infer U)[]
  ? DeepReadonlyArray11297<U>
  : T extends object
  ? DeepReadonlyObject11297<T>
  : T;

interface DeepReadonlyArray11297<T> extends ReadonlyArray<DeepReadonly11297<T>> {}

type DeepReadonlyObject11297<T> = {
  readonly [P in keyof T]: DeepReadonly11297<T[P]>;
};

type UnionToIntersection11297<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11297<T> = UnionToIntersection11297<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11297<T extends unknown[], V> = [...T, V];

type TuplifyUnion11297<T, L = LastOf11297<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11297<TuplifyUnion11297<Exclude<T, L>>, L>;

type DeepPartial11297<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11297<T[P]> }
  : T;

type Paths11297<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11297<K, Paths11297<T[K], Prev11297[D]>> : never }[keyof T]
  : never;

type Prev11297 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11297<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11297 {
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

type ConfigPaths11297 = Paths11297<NestedConfig11297>;

interface HeavyProps11297 {
  config: DeepPartial11297<NestedConfig11297>;
  path?: ConfigPaths11297;
}

const HeavyComponent11297 = memo(function HeavyComponent11297({ config }: HeavyProps11297) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11297) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11297 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11297: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11297.displayName = 'HeavyComponent11297';
export default HeavyComponent11297;
