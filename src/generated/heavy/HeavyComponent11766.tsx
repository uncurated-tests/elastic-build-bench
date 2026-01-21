'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11766<T> = T extends (infer U)[]
  ? DeepReadonlyArray11766<U>
  : T extends object
  ? DeepReadonlyObject11766<T>
  : T;

interface DeepReadonlyArray11766<T> extends ReadonlyArray<DeepReadonly11766<T>> {}

type DeepReadonlyObject11766<T> = {
  readonly [P in keyof T]: DeepReadonly11766<T[P]>;
};

type UnionToIntersection11766<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11766<T> = UnionToIntersection11766<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11766<T extends unknown[], V> = [...T, V];

type TuplifyUnion11766<T, L = LastOf11766<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11766<TuplifyUnion11766<Exclude<T, L>>, L>;

type DeepPartial11766<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11766<T[P]> }
  : T;

type Paths11766<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11766<K, Paths11766<T[K], Prev11766[D]>> : never }[keyof T]
  : never;

type Prev11766 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11766<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11766 {
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

type ConfigPaths11766 = Paths11766<NestedConfig11766>;

interface HeavyProps11766 {
  config: DeepPartial11766<NestedConfig11766>;
  path?: ConfigPaths11766;
}

const HeavyComponent11766 = memo(function HeavyComponent11766({ config }: HeavyProps11766) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11766) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11766 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11766: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11766.displayName = 'HeavyComponent11766';
export default HeavyComponent11766;
