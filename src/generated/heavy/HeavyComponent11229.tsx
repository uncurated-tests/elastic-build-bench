'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11229<T> = T extends (infer U)[]
  ? DeepReadonlyArray11229<U>
  : T extends object
  ? DeepReadonlyObject11229<T>
  : T;

interface DeepReadonlyArray11229<T> extends ReadonlyArray<DeepReadonly11229<T>> {}

type DeepReadonlyObject11229<T> = {
  readonly [P in keyof T]: DeepReadonly11229<T[P]>;
};

type UnionToIntersection11229<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11229<T> = UnionToIntersection11229<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11229<T extends unknown[], V> = [...T, V];

type TuplifyUnion11229<T, L = LastOf11229<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11229<TuplifyUnion11229<Exclude<T, L>>, L>;

type DeepPartial11229<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11229<T[P]> }
  : T;

type Paths11229<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11229<K, Paths11229<T[K], Prev11229[D]>> : never }[keyof T]
  : never;

type Prev11229 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11229<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11229 {
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

type ConfigPaths11229 = Paths11229<NestedConfig11229>;

interface HeavyProps11229 {
  config: DeepPartial11229<NestedConfig11229>;
  path?: ConfigPaths11229;
}

const HeavyComponent11229 = memo(function HeavyComponent11229({ config }: HeavyProps11229) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11229) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11229 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11229: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11229.displayName = 'HeavyComponent11229';
export default HeavyComponent11229;
