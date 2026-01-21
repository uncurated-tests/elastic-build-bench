'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11268<T> = T extends (infer U)[]
  ? DeepReadonlyArray11268<U>
  : T extends object
  ? DeepReadonlyObject11268<T>
  : T;

interface DeepReadonlyArray11268<T> extends ReadonlyArray<DeepReadonly11268<T>> {}

type DeepReadonlyObject11268<T> = {
  readonly [P in keyof T]: DeepReadonly11268<T[P]>;
};

type UnionToIntersection11268<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11268<T> = UnionToIntersection11268<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11268<T extends unknown[], V> = [...T, V];

type TuplifyUnion11268<T, L = LastOf11268<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11268<TuplifyUnion11268<Exclude<T, L>>, L>;

type DeepPartial11268<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11268<T[P]> }
  : T;

type Paths11268<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11268<K, Paths11268<T[K], Prev11268[D]>> : never }[keyof T]
  : never;

type Prev11268 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11268<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11268 {
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

type ConfigPaths11268 = Paths11268<NestedConfig11268>;

interface HeavyProps11268 {
  config: DeepPartial11268<NestedConfig11268>;
  path?: ConfigPaths11268;
}

const HeavyComponent11268 = memo(function HeavyComponent11268({ config }: HeavyProps11268) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11268) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11268 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11268: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11268.displayName = 'HeavyComponent11268';
export default HeavyComponent11268;
