'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11886<T> = T extends (infer U)[]
  ? DeepReadonlyArray11886<U>
  : T extends object
  ? DeepReadonlyObject11886<T>
  : T;

interface DeepReadonlyArray11886<T> extends ReadonlyArray<DeepReadonly11886<T>> {}

type DeepReadonlyObject11886<T> = {
  readonly [P in keyof T]: DeepReadonly11886<T[P]>;
};

type UnionToIntersection11886<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11886<T> = UnionToIntersection11886<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11886<T extends unknown[], V> = [...T, V];

type TuplifyUnion11886<T, L = LastOf11886<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11886<TuplifyUnion11886<Exclude<T, L>>, L>;

type DeepPartial11886<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11886<T[P]> }
  : T;

type Paths11886<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11886<K, Paths11886<T[K], Prev11886[D]>> : never }[keyof T]
  : never;

type Prev11886 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11886<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11886 {
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

type ConfigPaths11886 = Paths11886<NestedConfig11886>;

interface HeavyProps11886 {
  config: DeepPartial11886<NestedConfig11886>;
  path?: ConfigPaths11886;
}

const HeavyComponent11886 = memo(function HeavyComponent11886({ config }: HeavyProps11886) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11886) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11886 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11886: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11886.displayName = 'HeavyComponent11886';
export default HeavyComponent11886;
