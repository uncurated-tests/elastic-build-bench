'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11248<T> = T extends (infer U)[]
  ? DeepReadonlyArray11248<U>
  : T extends object
  ? DeepReadonlyObject11248<T>
  : T;

interface DeepReadonlyArray11248<T> extends ReadonlyArray<DeepReadonly11248<T>> {}

type DeepReadonlyObject11248<T> = {
  readonly [P in keyof T]: DeepReadonly11248<T[P]>;
};

type UnionToIntersection11248<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11248<T> = UnionToIntersection11248<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11248<T extends unknown[], V> = [...T, V];

type TuplifyUnion11248<T, L = LastOf11248<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11248<TuplifyUnion11248<Exclude<T, L>>, L>;

type DeepPartial11248<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11248<T[P]> }
  : T;

type Paths11248<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11248<K, Paths11248<T[K], Prev11248[D]>> : never }[keyof T]
  : never;

type Prev11248 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11248<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11248 {
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

type ConfigPaths11248 = Paths11248<NestedConfig11248>;

interface HeavyProps11248 {
  config: DeepPartial11248<NestedConfig11248>;
  path?: ConfigPaths11248;
}

const HeavyComponent11248 = memo(function HeavyComponent11248({ config }: HeavyProps11248) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11248) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11248 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11248: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11248.displayName = 'HeavyComponent11248';
export default HeavyComponent11248;
