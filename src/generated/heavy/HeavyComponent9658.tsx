'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9658<T> = T extends (infer U)[]
  ? DeepReadonlyArray9658<U>
  : T extends object
  ? DeepReadonlyObject9658<T>
  : T;

interface DeepReadonlyArray9658<T> extends ReadonlyArray<DeepReadonly9658<T>> {}

type DeepReadonlyObject9658<T> = {
  readonly [P in keyof T]: DeepReadonly9658<T[P]>;
};

type UnionToIntersection9658<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9658<T> = UnionToIntersection9658<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9658<T extends unknown[], V> = [...T, V];

type TuplifyUnion9658<T, L = LastOf9658<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9658<TuplifyUnion9658<Exclude<T, L>>, L>;

type DeepPartial9658<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9658<T[P]> }
  : T;

type Paths9658<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9658<K, Paths9658<T[K], Prev9658[D]>> : never }[keyof T]
  : never;

type Prev9658 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9658<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9658 {
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

type ConfigPaths9658 = Paths9658<NestedConfig9658>;

interface HeavyProps9658 {
  config: DeepPartial9658<NestedConfig9658>;
  path?: ConfigPaths9658;
}

const HeavyComponent9658 = memo(function HeavyComponent9658({ config }: HeavyProps9658) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9658) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9658 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9658: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9658.displayName = 'HeavyComponent9658';
export default HeavyComponent9658;
