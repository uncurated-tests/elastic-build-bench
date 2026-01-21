'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11176<T> = T extends (infer U)[]
  ? DeepReadonlyArray11176<U>
  : T extends object
  ? DeepReadonlyObject11176<T>
  : T;

interface DeepReadonlyArray11176<T> extends ReadonlyArray<DeepReadonly11176<T>> {}

type DeepReadonlyObject11176<T> = {
  readonly [P in keyof T]: DeepReadonly11176<T[P]>;
};

type UnionToIntersection11176<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11176<T> = UnionToIntersection11176<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11176<T extends unknown[], V> = [...T, V];

type TuplifyUnion11176<T, L = LastOf11176<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11176<TuplifyUnion11176<Exclude<T, L>>, L>;

type DeepPartial11176<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11176<T[P]> }
  : T;

type Paths11176<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11176<K, Paths11176<T[K], Prev11176[D]>> : never }[keyof T]
  : never;

type Prev11176 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11176<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11176 {
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

type ConfigPaths11176 = Paths11176<NestedConfig11176>;

interface HeavyProps11176 {
  config: DeepPartial11176<NestedConfig11176>;
  path?: ConfigPaths11176;
}

const HeavyComponent11176 = memo(function HeavyComponent11176({ config }: HeavyProps11176) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11176) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11176 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11176: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11176.displayName = 'HeavyComponent11176';
export default HeavyComponent11176;
