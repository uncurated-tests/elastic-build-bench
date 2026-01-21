'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11117<T> = T extends (infer U)[]
  ? DeepReadonlyArray11117<U>
  : T extends object
  ? DeepReadonlyObject11117<T>
  : T;

interface DeepReadonlyArray11117<T> extends ReadonlyArray<DeepReadonly11117<T>> {}

type DeepReadonlyObject11117<T> = {
  readonly [P in keyof T]: DeepReadonly11117<T[P]>;
};

type UnionToIntersection11117<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11117<T> = UnionToIntersection11117<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11117<T extends unknown[], V> = [...T, V];

type TuplifyUnion11117<T, L = LastOf11117<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11117<TuplifyUnion11117<Exclude<T, L>>, L>;

type DeepPartial11117<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11117<T[P]> }
  : T;

type Paths11117<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11117<K, Paths11117<T[K], Prev11117[D]>> : never }[keyof T]
  : never;

type Prev11117 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11117<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11117 {
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

type ConfigPaths11117 = Paths11117<NestedConfig11117>;

interface HeavyProps11117 {
  config: DeepPartial11117<NestedConfig11117>;
  path?: ConfigPaths11117;
}

const HeavyComponent11117 = memo(function HeavyComponent11117({ config }: HeavyProps11117) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11117) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11117 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11117: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11117.displayName = 'HeavyComponent11117';
export default HeavyComponent11117;
