'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11593<T> = T extends (infer U)[]
  ? DeepReadonlyArray11593<U>
  : T extends object
  ? DeepReadonlyObject11593<T>
  : T;

interface DeepReadonlyArray11593<T> extends ReadonlyArray<DeepReadonly11593<T>> {}

type DeepReadonlyObject11593<T> = {
  readonly [P in keyof T]: DeepReadonly11593<T[P]>;
};

type UnionToIntersection11593<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11593<T> = UnionToIntersection11593<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11593<T extends unknown[], V> = [...T, V];

type TuplifyUnion11593<T, L = LastOf11593<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11593<TuplifyUnion11593<Exclude<T, L>>, L>;

type DeepPartial11593<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11593<T[P]> }
  : T;

type Paths11593<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11593<K, Paths11593<T[K], Prev11593[D]>> : never }[keyof T]
  : never;

type Prev11593 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11593<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11593 {
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

type ConfigPaths11593 = Paths11593<NestedConfig11593>;

interface HeavyProps11593 {
  config: DeepPartial11593<NestedConfig11593>;
  path?: ConfigPaths11593;
}

const HeavyComponent11593 = memo(function HeavyComponent11593({ config }: HeavyProps11593) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11593) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11593 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11593: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11593.displayName = 'HeavyComponent11593';
export default HeavyComponent11593;
