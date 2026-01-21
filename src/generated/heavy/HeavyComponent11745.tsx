'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11745<T> = T extends (infer U)[]
  ? DeepReadonlyArray11745<U>
  : T extends object
  ? DeepReadonlyObject11745<T>
  : T;

interface DeepReadonlyArray11745<T> extends ReadonlyArray<DeepReadonly11745<T>> {}

type DeepReadonlyObject11745<T> = {
  readonly [P in keyof T]: DeepReadonly11745<T[P]>;
};

type UnionToIntersection11745<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11745<T> = UnionToIntersection11745<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11745<T extends unknown[], V> = [...T, V];

type TuplifyUnion11745<T, L = LastOf11745<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11745<TuplifyUnion11745<Exclude<T, L>>, L>;

type DeepPartial11745<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11745<T[P]> }
  : T;

type Paths11745<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11745<K, Paths11745<T[K], Prev11745[D]>> : never }[keyof T]
  : never;

type Prev11745 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11745<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11745 {
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

type ConfigPaths11745 = Paths11745<NestedConfig11745>;

interface HeavyProps11745 {
  config: DeepPartial11745<NestedConfig11745>;
  path?: ConfigPaths11745;
}

const HeavyComponent11745 = memo(function HeavyComponent11745({ config }: HeavyProps11745) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11745) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11745 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11745: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11745.displayName = 'HeavyComponent11745';
export default HeavyComponent11745;
