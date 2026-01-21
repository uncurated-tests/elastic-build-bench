'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11558<T> = T extends (infer U)[]
  ? DeepReadonlyArray11558<U>
  : T extends object
  ? DeepReadonlyObject11558<T>
  : T;

interface DeepReadonlyArray11558<T> extends ReadonlyArray<DeepReadonly11558<T>> {}

type DeepReadonlyObject11558<T> = {
  readonly [P in keyof T]: DeepReadonly11558<T[P]>;
};

type UnionToIntersection11558<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11558<T> = UnionToIntersection11558<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11558<T extends unknown[], V> = [...T, V];

type TuplifyUnion11558<T, L = LastOf11558<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11558<TuplifyUnion11558<Exclude<T, L>>, L>;

type DeepPartial11558<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11558<T[P]> }
  : T;

type Paths11558<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11558<K, Paths11558<T[K], Prev11558[D]>> : never }[keyof T]
  : never;

type Prev11558 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11558<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11558 {
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

type ConfigPaths11558 = Paths11558<NestedConfig11558>;

interface HeavyProps11558 {
  config: DeepPartial11558<NestedConfig11558>;
  path?: ConfigPaths11558;
}

const HeavyComponent11558 = memo(function HeavyComponent11558({ config }: HeavyProps11558) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11558) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11558 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11558: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11558.displayName = 'HeavyComponent11558';
export default HeavyComponent11558;
