'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11676<T> = T extends (infer U)[]
  ? DeepReadonlyArray11676<U>
  : T extends object
  ? DeepReadonlyObject11676<T>
  : T;

interface DeepReadonlyArray11676<T> extends ReadonlyArray<DeepReadonly11676<T>> {}

type DeepReadonlyObject11676<T> = {
  readonly [P in keyof T]: DeepReadonly11676<T[P]>;
};

type UnionToIntersection11676<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11676<T> = UnionToIntersection11676<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11676<T extends unknown[], V> = [...T, V];

type TuplifyUnion11676<T, L = LastOf11676<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11676<TuplifyUnion11676<Exclude<T, L>>, L>;

type DeepPartial11676<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11676<T[P]> }
  : T;

type Paths11676<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11676<K, Paths11676<T[K], Prev11676[D]>> : never }[keyof T]
  : never;

type Prev11676 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11676<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11676 {
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

type ConfigPaths11676 = Paths11676<NestedConfig11676>;

interface HeavyProps11676 {
  config: DeepPartial11676<NestedConfig11676>;
  path?: ConfigPaths11676;
}

const HeavyComponent11676 = memo(function HeavyComponent11676({ config }: HeavyProps11676) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11676) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11676 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11676: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11676.displayName = 'HeavyComponent11676';
export default HeavyComponent11676;
