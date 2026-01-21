'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11203<T> = T extends (infer U)[]
  ? DeepReadonlyArray11203<U>
  : T extends object
  ? DeepReadonlyObject11203<T>
  : T;

interface DeepReadonlyArray11203<T> extends ReadonlyArray<DeepReadonly11203<T>> {}

type DeepReadonlyObject11203<T> = {
  readonly [P in keyof T]: DeepReadonly11203<T[P]>;
};

type UnionToIntersection11203<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11203<T> = UnionToIntersection11203<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11203<T extends unknown[], V> = [...T, V];

type TuplifyUnion11203<T, L = LastOf11203<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11203<TuplifyUnion11203<Exclude<T, L>>, L>;

type DeepPartial11203<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11203<T[P]> }
  : T;

type Paths11203<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11203<K, Paths11203<T[K], Prev11203[D]>> : never }[keyof T]
  : never;

type Prev11203 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11203<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11203 {
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

type ConfigPaths11203 = Paths11203<NestedConfig11203>;

interface HeavyProps11203 {
  config: DeepPartial11203<NestedConfig11203>;
  path?: ConfigPaths11203;
}

const HeavyComponent11203 = memo(function HeavyComponent11203({ config }: HeavyProps11203) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11203) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11203 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11203: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11203.displayName = 'HeavyComponent11203';
export default HeavyComponent11203;
