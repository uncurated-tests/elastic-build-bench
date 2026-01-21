'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11978<T> = T extends (infer U)[]
  ? DeepReadonlyArray11978<U>
  : T extends object
  ? DeepReadonlyObject11978<T>
  : T;

interface DeepReadonlyArray11978<T> extends ReadonlyArray<DeepReadonly11978<T>> {}

type DeepReadonlyObject11978<T> = {
  readonly [P in keyof T]: DeepReadonly11978<T[P]>;
};

type UnionToIntersection11978<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11978<T> = UnionToIntersection11978<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11978<T extends unknown[], V> = [...T, V];

type TuplifyUnion11978<T, L = LastOf11978<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11978<TuplifyUnion11978<Exclude<T, L>>, L>;

type DeepPartial11978<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11978<T[P]> }
  : T;

type Paths11978<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11978<K, Paths11978<T[K], Prev11978[D]>> : never }[keyof T]
  : never;

type Prev11978 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11978<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11978 {
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

type ConfigPaths11978 = Paths11978<NestedConfig11978>;

interface HeavyProps11978 {
  config: DeepPartial11978<NestedConfig11978>;
  path?: ConfigPaths11978;
}

const HeavyComponent11978 = memo(function HeavyComponent11978({ config }: HeavyProps11978) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11978) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11978 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11978: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11978.displayName = 'HeavyComponent11978';
export default HeavyComponent11978;
