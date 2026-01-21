'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11756<T> = T extends (infer U)[]
  ? DeepReadonlyArray11756<U>
  : T extends object
  ? DeepReadonlyObject11756<T>
  : T;

interface DeepReadonlyArray11756<T> extends ReadonlyArray<DeepReadonly11756<T>> {}

type DeepReadonlyObject11756<T> = {
  readonly [P in keyof T]: DeepReadonly11756<T[P]>;
};

type UnionToIntersection11756<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11756<T> = UnionToIntersection11756<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11756<T extends unknown[], V> = [...T, V];

type TuplifyUnion11756<T, L = LastOf11756<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11756<TuplifyUnion11756<Exclude<T, L>>, L>;

type DeepPartial11756<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11756<T[P]> }
  : T;

type Paths11756<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11756<K, Paths11756<T[K], Prev11756[D]>> : never }[keyof T]
  : never;

type Prev11756 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11756<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11756 {
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

type ConfigPaths11756 = Paths11756<NestedConfig11756>;

interface HeavyProps11756 {
  config: DeepPartial11756<NestedConfig11756>;
  path?: ConfigPaths11756;
}

const HeavyComponent11756 = memo(function HeavyComponent11756({ config }: HeavyProps11756) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11756) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11756 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11756: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11756.displayName = 'HeavyComponent11756';
export default HeavyComponent11756;
