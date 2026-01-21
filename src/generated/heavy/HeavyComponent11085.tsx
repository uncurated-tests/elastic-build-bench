'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11085<T> = T extends (infer U)[]
  ? DeepReadonlyArray11085<U>
  : T extends object
  ? DeepReadonlyObject11085<T>
  : T;

interface DeepReadonlyArray11085<T> extends ReadonlyArray<DeepReadonly11085<T>> {}

type DeepReadonlyObject11085<T> = {
  readonly [P in keyof T]: DeepReadonly11085<T[P]>;
};

type UnionToIntersection11085<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11085<T> = UnionToIntersection11085<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11085<T extends unknown[], V> = [...T, V];

type TuplifyUnion11085<T, L = LastOf11085<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11085<TuplifyUnion11085<Exclude<T, L>>, L>;

type DeepPartial11085<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11085<T[P]> }
  : T;

type Paths11085<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11085<K, Paths11085<T[K], Prev11085[D]>> : never }[keyof T]
  : never;

type Prev11085 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11085<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11085 {
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

type ConfigPaths11085 = Paths11085<NestedConfig11085>;

interface HeavyProps11085 {
  config: DeepPartial11085<NestedConfig11085>;
  path?: ConfigPaths11085;
}

const HeavyComponent11085 = memo(function HeavyComponent11085({ config }: HeavyProps11085) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11085) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11085 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11085: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11085.displayName = 'HeavyComponent11085';
export default HeavyComponent11085;
