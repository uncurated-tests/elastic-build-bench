'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11233<T> = T extends (infer U)[]
  ? DeepReadonlyArray11233<U>
  : T extends object
  ? DeepReadonlyObject11233<T>
  : T;

interface DeepReadonlyArray11233<T> extends ReadonlyArray<DeepReadonly11233<T>> {}

type DeepReadonlyObject11233<T> = {
  readonly [P in keyof T]: DeepReadonly11233<T[P]>;
};

type UnionToIntersection11233<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11233<T> = UnionToIntersection11233<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11233<T extends unknown[], V> = [...T, V];

type TuplifyUnion11233<T, L = LastOf11233<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11233<TuplifyUnion11233<Exclude<T, L>>, L>;

type DeepPartial11233<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11233<T[P]> }
  : T;

type Paths11233<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11233<K, Paths11233<T[K], Prev11233[D]>> : never }[keyof T]
  : never;

type Prev11233 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11233<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11233 {
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

type ConfigPaths11233 = Paths11233<NestedConfig11233>;

interface HeavyProps11233 {
  config: DeepPartial11233<NestedConfig11233>;
  path?: ConfigPaths11233;
}

const HeavyComponent11233 = memo(function HeavyComponent11233({ config }: HeavyProps11233) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11233) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11233 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11233: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11233.displayName = 'HeavyComponent11233';
export default HeavyComponent11233;
