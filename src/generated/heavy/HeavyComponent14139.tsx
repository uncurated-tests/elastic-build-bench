'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14139<T> = T extends (infer U)[]
  ? DeepReadonlyArray14139<U>
  : T extends object
  ? DeepReadonlyObject14139<T>
  : T;

interface DeepReadonlyArray14139<T> extends ReadonlyArray<DeepReadonly14139<T>> {}

type DeepReadonlyObject14139<T> = {
  readonly [P in keyof T]: DeepReadonly14139<T[P]>;
};

type UnionToIntersection14139<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14139<T> = UnionToIntersection14139<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14139<T extends unknown[], V> = [...T, V];

type TuplifyUnion14139<T, L = LastOf14139<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14139<TuplifyUnion14139<Exclude<T, L>>, L>;

type DeepPartial14139<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14139<T[P]> }
  : T;

type Paths14139<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14139<K, Paths14139<T[K], Prev14139[D]>> : never }[keyof T]
  : never;

type Prev14139 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14139<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14139 {
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

type ConfigPaths14139 = Paths14139<NestedConfig14139>;

interface HeavyProps14139 {
  config: DeepPartial14139<NestedConfig14139>;
  path?: ConfigPaths14139;
}

const HeavyComponent14139 = memo(function HeavyComponent14139({ config }: HeavyProps14139) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14139) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14139 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14139: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14139.displayName = 'HeavyComponent14139';
export default HeavyComponent14139;
