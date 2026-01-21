'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11742<T> = T extends (infer U)[]
  ? DeepReadonlyArray11742<U>
  : T extends object
  ? DeepReadonlyObject11742<T>
  : T;

interface DeepReadonlyArray11742<T> extends ReadonlyArray<DeepReadonly11742<T>> {}

type DeepReadonlyObject11742<T> = {
  readonly [P in keyof T]: DeepReadonly11742<T[P]>;
};

type UnionToIntersection11742<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11742<T> = UnionToIntersection11742<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11742<T extends unknown[], V> = [...T, V];

type TuplifyUnion11742<T, L = LastOf11742<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11742<TuplifyUnion11742<Exclude<T, L>>, L>;

type DeepPartial11742<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11742<T[P]> }
  : T;

type Paths11742<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11742<K, Paths11742<T[K], Prev11742[D]>> : never }[keyof T]
  : never;

type Prev11742 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11742<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11742 {
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

type ConfigPaths11742 = Paths11742<NestedConfig11742>;

interface HeavyProps11742 {
  config: DeepPartial11742<NestedConfig11742>;
  path?: ConfigPaths11742;
}

const HeavyComponent11742 = memo(function HeavyComponent11742({ config }: HeavyProps11742) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11742) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11742 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11742: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11742.displayName = 'HeavyComponent11742';
export default HeavyComponent11742;
