'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11524<T> = T extends (infer U)[]
  ? DeepReadonlyArray11524<U>
  : T extends object
  ? DeepReadonlyObject11524<T>
  : T;

interface DeepReadonlyArray11524<T> extends ReadonlyArray<DeepReadonly11524<T>> {}

type DeepReadonlyObject11524<T> = {
  readonly [P in keyof T]: DeepReadonly11524<T[P]>;
};

type UnionToIntersection11524<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11524<T> = UnionToIntersection11524<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11524<T extends unknown[], V> = [...T, V];

type TuplifyUnion11524<T, L = LastOf11524<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11524<TuplifyUnion11524<Exclude<T, L>>, L>;

type DeepPartial11524<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11524<T[P]> }
  : T;

type Paths11524<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11524<K, Paths11524<T[K], Prev11524[D]>> : never }[keyof T]
  : never;

type Prev11524 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11524<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11524 {
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

type ConfigPaths11524 = Paths11524<NestedConfig11524>;

interface HeavyProps11524 {
  config: DeepPartial11524<NestedConfig11524>;
  path?: ConfigPaths11524;
}

const HeavyComponent11524 = memo(function HeavyComponent11524({ config }: HeavyProps11524) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11524) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11524 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11524: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11524.displayName = 'HeavyComponent11524';
export default HeavyComponent11524;
