'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly237<T> = T extends (infer U)[]
  ? DeepReadonlyArray237<U>
  : T extends object
  ? DeepReadonlyObject237<T>
  : T;

interface DeepReadonlyArray237<T> extends ReadonlyArray<DeepReadonly237<T>> {}

type DeepReadonlyObject237<T> = {
  readonly [P in keyof T]: DeepReadonly237<T[P]>;
};

type UnionToIntersection237<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf237<T> = UnionToIntersection237<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push237<T extends unknown[], V> = [...T, V];

type TuplifyUnion237<T, L = LastOf237<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push237<TuplifyUnion237<Exclude<T, L>>, L>;

type DeepPartial237<T> = T extends object
  ? { [P in keyof T]?: DeepPartial237<T[P]> }
  : T;

type Paths237<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join237<K, Paths237<T[K], Prev237[D]>> : never }[keyof T]
  : never;

type Prev237 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join237<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig237 {
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

type ConfigPaths237 = Paths237<NestedConfig237>;

interface HeavyProps237 {
  config: DeepPartial237<NestedConfig237>;
  path?: ConfigPaths237;
}

const HeavyComponent237 = memo(function HeavyComponent237({ config }: HeavyProps237) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 237) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-237 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H237: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent237.displayName = 'HeavyComponent237';
export default HeavyComponent237;
