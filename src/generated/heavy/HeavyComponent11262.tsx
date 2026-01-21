'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11262<T> = T extends (infer U)[]
  ? DeepReadonlyArray11262<U>
  : T extends object
  ? DeepReadonlyObject11262<T>
  : T;

interface DeepReadonlyArray11262<T> extends ReadonlyArray<DeepReadonly11262<T>> {}

type DeepReadonlyObject11262<T> = {
  readonly [P in keyof T]: DeepReadonly11262<T[P]>;
};

type UnionToIntersection11262<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11262<T> = UnionToIntersection11262<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11262<T extends unknown[], V> = [...T, V];

type TuplifyUnion11262<T, L = LastOf11262<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11262<TuplifyUnion11262<Exclude<T, L>>, L>;

type DeepPartial11262<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11262<T[P]> }
  : T;

type Paths11262<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11262<K, Paths11262<T[K], Prev11262[D]>> : never }[keyof T]
  : never;

type Prev11262 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11262<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11262 {
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

type ConfigPaths11262 = Paths11262<NestedConfig11262>;

interface HeavyProps11262 {
  config: DeepPartial11262<NestedConfig11262>;
  path?: ConfigPaths11262;
}

const HeavyComponent11262 = memo(function HeavyComponent11262({ config }: HeavyProps11262) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11262) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11262 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11262: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11262.displayName = 'HeavyComponent11262';
export default HeavyComponent11262;
