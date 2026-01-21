'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11305<T> = T extends (infer U)[]
  ? DeepReadonlyArray11305<U>
  : T extends object
  ? DeepReadonlyObject11305<T>
  : T;

interface DeepReadonlyArray11305<T> extends ReadonlyArray<DeepReadonly11305<T>> {}

type DeepReadonlyObject11305<T> = {
  readonly [P in keyof T]: DeepReadonly11305<T[P]>;
};

type UnionToIntersection11305<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11305<T> = UnionToIntersection11305<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11305<T extends unknown[], V> = [...T, V];

type TuplifyUnion11305<T, L = LastOf11305<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11305<TuplifyUnion11305<Exclude<T, L>>, L>;

type DeepPartial11305<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11305<T[P]> }
  : T;

type Paths11305<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11305<K, Paths11305<T[K], Prev11305[D]>> : never }[keyof T]
  : never;

type Prev11305 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11305<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11305 {
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

type ConfigPaths11305 = Paths11305<NestedConfig11305>;

interface HeavyProps11305 {
  config: DeepPartial11305<NestedConfig11305>;
  path?: ConfigPaths11305;
}

const HeavyComponent11305 = memo(function HeavyComponent11305({ config }: HeavyProps11305) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11305) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11305 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11305: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11305.displayName = 'HeavyComponent11305';
export default HeavyComponent11305;
