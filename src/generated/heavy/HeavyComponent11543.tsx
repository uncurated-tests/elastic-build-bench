'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11543<T> = T extends (infer U)[]
  ? DeepReadonlyArray11543<U>
  : T extends object
  ? DeepReadonlyObject11543<T>
  : T;

interface DeepReadonlyArray11543<T> extends ReadonlyArray<DeepReadonly11543<T>> {}

type DeepReadonlyObject11543<T> = {
  readonly [P in keyof T]: DeepReadonly11543<T[P]>;
};

type UnionToIntersection11543<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11543<T> = UnionToIntersection11543<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11543<T extends unknown[], V> = [...T, V];

type TuplifyUnion11543<T, L = LastOf11543<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11543<TuplifyUnion11543<Exclude<T, L>>, L>;

type DeepPartial11543<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11543<T[P]> }
  : T;

type Paths11543<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11543<K, Paths11543<T[K], Prev11543[D]>> : never }[keyof T]
  : never;

type Prev11543 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11543<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11543 {
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

type ConfigPaths11543 = Paths11543<NestedConfig11543>;

interface HeavyProps11543 {
  config: DeepPartial11543<NestedConfig11543>;
  path?: ConfigPaths11543;
}

const HeavyComponent11543 = memo(function HeavyComponent11543({ config }: HeavyProps11543) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11543) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11543 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11543: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11543.displayName = 'HeavyComponent11543';
export default HeavyComponent11543;
