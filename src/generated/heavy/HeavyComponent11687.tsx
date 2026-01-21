'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11687<T> = T extends (infer U)[]
  ? DeepReadonlyArray11687<U>
  : T extends object
  ? DeepReadonlyObject11687<T>
  : T;

interface DeepReadonlyArray11687<T> extends ReadonlyArray<DeepReadonly11687<T>> {}

type DeepReadonlyObject11687<T> = {
  readonly [P in keyof T]: DeepReadonly11687<T[P]>;
};

type UnionToIntersection11687<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11687<T> = UnionToIntersection11687<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11687<T extends unknown[], V> = [...T, V];

type TuplifyUnion11687<T, L = LastOf11687<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11687<TuplifyUnion11687<Exclude<T, L>>, L>;

type DeepPartial11687<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11687<T[P]> }
  : T;

type Paths11687<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11687<K, Paths11687<T[K], Prev11687[D]>> : never }[keyof T]
  : never;

type Prev11687 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11687<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11687 {
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

type ConfigPaths11687 = Paths11687<NestedConfig11687>;

interface HeavyProps11687 {
  config: DeepPartial11687<NestedConfig11687>;
  path?: ConfigPaths11687;
}

const HeavyComponent11687 = memo(function HeavyComponent11687({ config }: HeavyProps11687) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11687) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11687 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11687: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11687.displayName = 'HeavyComponent11687';
export default HeavyComponent11687;
