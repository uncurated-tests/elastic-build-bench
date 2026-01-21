'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11139<T> = T extends (infer U)[]
  ? DeepReadonlyArray11139<U>
  : T extends object
  ? DeepReadonlyObject11139<T>
  : T;

interface DeepReadonlyArray11139<T> extends ReadonlyArray<DeepReadonly11139<T>> {}

type DeepReadonlyObject11139<T> = {
  readonly [P in keyof T]: DeepReadonly11139<T[P]>;
};

type UnionToIntersection11139<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11139<T> = UnionToIntersection11139<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11139<T extends unknown[], V> = [...T, V];

type TuplifyUnion11139<T, L = LastOf11139<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11139<TuplifyUnion11139<Exclude<T, L>>, L>;

type DeepPartial11139<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11139<T[P]> }
  : T;

type Paths11139<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11139<K, Paths11139<T[K], Prev11139[D]>> : never }[keyof T]
  : never;

type Prev11139 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11139<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11139 {
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

type ConfigPaths11139 = Paths11139<NestedConfig11139>;

interface HeavyProps11139 {
  config: DeepPartial11139<NestedConfig11139>;
  path?: ConfigPaths11139;
}

const HeavyComponent11139 = memo(function HeavyComponent11139({ config }: HeavyProps11139) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11139) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11139 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11139: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11139.displayName = 'HeavyComponent11139';
export default HeavyComponent11139;
