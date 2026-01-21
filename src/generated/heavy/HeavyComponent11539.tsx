'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11539<T> = T extends (infer U)[]
  ? DeepReadonlyArray11539<U>
  : T extends object
  ? DeepReadonlyObject11539<T>
  : T;

interface DeepReadonlyArray11539<T> extends ReadonlyArray<DeepReadonly11539<T>> {}

type DeepReadonlyObject11539<T> = {
  readonly [P in keyof T]: DeepReadonly11539<T[P]>;
};

type UnionToIntersection11539<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11539<T> = UnionToIntersection11539<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11539<T extends unknown[], V> = [...T, V];

type TuplifyUnion11539<T, L = LastOf11539<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11539<TuplifyUnion11539<Exclude<T, L>>, L>;

type DeepPartial11539<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11539<T[P]> }
  : T;

type Paths11539<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11539<K, Paths11539<T[K], Prev11539[D]>> : never }[keyof T]
  : never;

type Prev11539 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11539<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11539 {
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

type ConfigPaths11539 = Paths11539<NestedConfig11539>;

interface HeavyProps11539 {
  config: DeepPartial11539<NestedConfig11539>;
  path?: ConfigPaths11539;
}

const HeavyComponent11539 = memo(function HeavyComponent11539({ config }: HeavyProps11539) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11539) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11539 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11539: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11539.displayName = 'HeavyComponent11539';
export default HeavyComponent11539;
